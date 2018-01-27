package com.example.library.repository.association;

// @formatter:off

import com.example.library.model.view.AbstractIdentifiable;

/**
 * Responsible to load <strong>JPA</strong> entities lazily by primary key.
 * This feature has two main purposes:
 * <ul>
 *  <li>avoid extra queries to just update association;</li>
 *  <li>can take full advantage from JPA's associations without messing associations with primary key mapping.</li>
 * </ul>
 *
 * Example:
 * 1) Update association without extra query:
 *
 * We have an user who is related to some company. The JPA mapping looks as follows:
 *
 * @Entity
 * public class User {
 *
 *     ...
 *
 *     @ManyToOne
 *     private Company company;
 * }
 *
 * And when we have companyId primary key only and want to avoid extra query just to make cascades happy:
 *
 * public class UserService {
 *     private UserRepository userRepository;
 *
 *     private LazyEntityLoader lazyEntityLoader;
 *
 *     public void attachUserToCompany(final User user, final Long companyId) {
 *          user.setCompany(lazyEntityLoader.load(companyId, Company.class)); //no extra query required for company
 *          userRepository.save(user);
 *      }
 *
 * }
 *
 * 2) Find root entity by it's association:
 * Let's take the same mapping from the first example and try to find users belong to some company.
 * As in the previous example <strong>companyId</strong> is what we only have.
 *
 * public class UserService {
 *
 *     private UserRepository userRepository;
 *
 *     private LazyEntityLoader lazyEntityLoader;
 *
 *     public List<User> findByCompanyIdWithoutAdmin(final Long companyId) { //only on select query will be produced by this method
 *          Company lazyCompany = lazyEntityLoader.load(companyId, Company.class);
 *          return userRepository.findByCompanyIdWithoutAdmin(lazyCompany);
 *     }
 * }
 *
 */
 // @formatter:on
public interface LazyEntityLoader {

    /**
     * Loads entity by it's primary key value lazily. By lazily we mean that no
     * extra query is produced by execution of this method. You will got the JPA's proxy
     * object just like you do when deal with JPA's lazy associations ({@link javax.persistence.FetchType#LAZY}).
     * Just like with JPA's associations any access to this object will produce query to load the actual data from the
     * database. So in general you don't need to use it if you are planing to get the real data and use repository
     * methods instead. You also need to be careful if you access returned object directly because opened
     * transaction is required to do so. Otherwise you will end up with {@link org.hibernate.LazyInitializationException}
     *
     * @param primaryKey  entity's primary key value
     * @param entityClass class of mapped entity we wan't to load. (This entity must subclass {@link AbstractIdentifiable}
     *                    to avoid non-entity classes to be passed)
     * @param <T>         target entity class
     * @return JPA vendor's proxy object who is lazy
     * @throws javax.persistence.EntityNotFoundException when entity with id is not found
     * @apiNote as mentioned earlier this method returns a proxy so don't try to test it with instanceof
     */
    <T extends AbstractIdentifiable> T load(final Long primaryKey, final Class<T> entityClass);
}

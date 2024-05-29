package com.betastack.betastack.repo;

import com.betastack.betastack.model.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepo extends JpaRepository<Comments, Integer> {
    List<Comments> findById(int id);
    boolean existsBycommentid(int commentid);
}

package com.tariq.Hiring.Repository;

import com.tariq.Hiring.Models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String> {

}

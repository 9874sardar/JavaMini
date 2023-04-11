package com.tariq.Hiring.Repository;

import com.tariq.Hiring.Models.Post;

import java.util.List;

public interface SearchRepository {
    List<Post> findByText(String text);
}

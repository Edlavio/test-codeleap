import { useState, useEffect } from "react";
import { Post } from "../types";
import { fetchPosts } from "../lib/api";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const response = await fetchPosts();
      const reversed = response.data.results.reverse();
      setPosts(reversed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts, loading, reload: loadPosts };
}

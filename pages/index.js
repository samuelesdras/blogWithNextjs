import { Fragment } from "react";
import Head from 'next/head';

import FeaturedPost from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

import {getFeaturedPosts} from '../lib/posts-util';


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Samuel's Blog</title>
        <meta 
          name='description'
          content='I post about programing and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
} 

export default HomePage;

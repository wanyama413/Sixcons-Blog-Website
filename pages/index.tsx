import React, { useEffect, useState } from "react";
import { FeaturedPosts } from '../sections';
import { PostCard, Categories, PostWidget,Footer,ScrollToTop} from '../components';
import { getPosts } from '../services';
import countapi from "countapi-js";

import Head from 'next/head';
export default function Home({ posts }) {
  
 
  return (
     <>
    <div className="container mx-auto px-10 mb-8">
     
      <Head>
        <title>Sixcons</title>
        <link rel='icon' href='/favicon.ico' />
        
      </Head>
            <FeaturedPosts />
      
      <ScrollToTop/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
       
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            
          </div>
        
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  );
}


// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 10
  };
}


if(typeof window !== "undefined"){
   let her=document.querySelector('.wewe')
  let menu= document.querySelector('.phone-menu')
  menu?.addEventListener('click',function(){
  
  if(her?.classList.contains('phone-menu-canva')){
her?.classList.remove('salahh')
  }
   if(her?.classList.contains('phone-menu-canva')){
setTimeout(function(){
 her?.classList.add('salahh')
},2500)

 }
 
 
   })
   
  } 
      
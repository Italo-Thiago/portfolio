import React from 'react';
import '../../styles/global.css';

import { Nav } from '../../components/Nav';
import { BlogPost } from '../../components/BlogPost';

const Blog = () => {
    return (
        <>
        <div>
            <Nav />
        </div>
            <h1>Blog</h1>
            <BlogPost image="test.png" alt="esta é uma imagem de teste" title="teste" description="this is a test" />
        </>
    )
}

export { Blog }
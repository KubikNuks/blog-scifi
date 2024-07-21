
import blogData from './blogData.json';
import TopNavbar from '../../components/TopNavbar';
import ReadMore from '../../components/ReadMore';

export default function blogPost(){
    
    const { title, author, date, content, src } = blogData;
     const dataTest = true ;
    
    return (
        <>
          <TopNavbar />

            
<article className=" rounded-lg border-pink-400 bg-pink-200 p-5 mt-2 ">
    
<div id="blogPostImg" className="relative  rounded-md shadow-xl border-2 w-5/6 h-48  mx-auto">
<img 
        src={src} 
        alt="blog post img" 
        className="absolute inset-0 w-full h-full object-cover">
</img>
</div>
    
    <p className="  text-sm pl-5 pt-5">Autor: {author} Data: {date}</p>
    <div className="border-t h-1 border-bt border-gray-500"></div>
    <h1 className="text-6xl mx-auto pt-4">{title}</h1>
    
    
<main className="">
    
    <p className="p-4 pt-7">{content}</p>
</main>

    <ReadMore />
    
</article>
            
            
            </>
    )}
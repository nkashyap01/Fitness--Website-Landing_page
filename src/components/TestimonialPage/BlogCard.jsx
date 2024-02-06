import React from 'react'
import firstimage from "../../Assests/blog-first-image.png";
import secondimage from "../../Assests/blog-second-image.png";
import thirdimage from "../../Assests/blog-third-image.png";
import firsticon from "../../Assests/blog-first-icon.png";
import secondicon from "../../Assests/blog-second-icon.png";

const BlogCard = () => {
    const blogItems=[{
        blogpic:firstimage,
    },
    { blogpic:secondimage},
    { blogpic:thirdimage}
];
  return (
    <div className="flex justify-between px-5 py-3 ">
      {
        blogItems.map(({blogpic},index)=>{
            return(
                <div className="bg-[#F9FAFB] rounded-md flex flex-col pb-2 shadow-lg">
                    <img src={blogpic} alt=""/>
                    <div className="px-3 pt-1">
                    <p className="text-xs font-semibold text-[#FF7917]"> GYM</p>
                    <p className="text-lg-md font-semibold">Gym Essentials: Your Path to <br/>Fitness Success</p>
               <div className="flex ">
               <img src={firsticon} alt="" />
               <p className="text-xs pl-3"> by Admin</p>
               <img src={secondicon} className="pl-7" alt="" />
               <p className="text-xs pl-3">23 Sep, 2023</p>

               </div>
               </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default BlogCard;
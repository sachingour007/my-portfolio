import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deleniti pariatur labore magnam sit veniam amet nam cupiditate. Perferendis, velit illo laboriosam quod, quos sapiente, delectus nulla nisi natus corporis optio quam? Velit explicabo pariatur molestiae impedit facilis, id enim, perferendis labore a ducimus maiores magni quia quis doloribus sit?</p>
            <br />

            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga, labore quos dignissimos est ex beatae sunt quis reprehenderit, laboriosam itaque vero nam nulla ipsam pariatur dolore rem ipsa quasi enim optio neque expedita maxime amet. Distinctio autem porro dolorem dolorum, repellat, tenetur ratione ullam fugiat veniam pariatur, est voluptatibus!</p>

        </div>
    </div>
  )
}

export default About
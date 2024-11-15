import React from 'react'

export default function Hero() {
  return (

    <section className='hero bg-green-500 flex w-full h-screen text-white justify-center items-center' id='hero'>
      <div className='container text-center m-10'>
        <h1 className='text-center'>Bienvenue dans notre systeme de gestion d'evenements</h1>
        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ut facilis dolores quaerat quia consectetur nemo maxime ipsum ducimus, laborum repellendus voluptas reiciendis placeat exercitationem doloremque a perspiciatis, voluptate dolorem accusantium fugiat quisquam delectus natus deserunt veritatis. Excepturi corrupti atque delectus incidunt cumque quidem ratione iusto maxime, quibusdam rerum. Laborum nemo quia architecto officia quo labore, est sed nobis neque at quisquam. Dicta recusandae veniam, tenetur consequuntur quisquam nostrum quam, pariatur vitae cumque placeat, ipsa esse odit corrupti ducimus dignissimos blanditiis sed! Sunt, cumque repellendus soluta consectetur ut mollitia magnam optio qui sapiente quasi quam itaque necessitatibus id in quaerat.</p>
      </div>
      <div className='mr-20 '>
        <img src="/images/hero4.jpg" className='image-hero' alt="image-hero" />
      </div>
    </section>

  )
}

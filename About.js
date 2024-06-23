import React,{useEffect} from 'react'

function About({setSearchSection}) {

    useEffect(()=>{
        setSearchSection(false)
      })

    return (
        <div className='pt-20 h-[100%] min-h-screen  flex justify-center text-center'>
            <div className="container md:w-[70%] w-[80%] flex flex-col" style={{ overflowWrap: 'break-word' }}>

                <div className="title pt-4 text-2xl md:text-3xl "> About MemeGenerator</div>
                <div className="content p-4 flex flex-col border-2 ">
                    <div className="usage flex flex-col">


                        <div className="title pb-2 pt-3 text-2xl">How to Use ?</div>
                        <div className="content text-xl text-left bg-slate-200">
                            This app provides a straightforward user interface. You can choose meme templates from the home section or create custom templates in the custom edit section. We've integrated with the <a href='https://memegen.link/' target='_blank' rel="noreferrer"><b>MEMEGEN API</b></a> on the Home page to edit templates provided by MEMEGEN, which means there may be some limitations and occasional delays in customization.<br />
                            <b>Note:</b> Some templates may not require both top and bottom text, so please be mindful when generating memes (<i>only one input or three inputs may be needed</i>). If a template requires three inputs, we recommend downloading it and using it in the custom edit section.<br />
                            <b>Note:</b> You can fine-tune text placement in the custom edit section by adjusting the respective parameters from <i>0.10 to 0.99</i>.<br />
                            <b>Disclaimer:</b> This app does not infringe on any user-provided images, and it is entirely <a href='https://github.com/Ansuman-07/Meme-Generator'><b>Open Source</b></a>.
                        </div>

                        <div className="title pb-2 pt-3 text-2xl">Technologies Used</div>
                        <div className="content text-xl text-left bg-slate-200">
                            This app is built using <i>React JS </i>, a powerful JavaScript library, and styled with <i>Tailwind CSS </i>, a versatile CSS framework. It is designed to be responsive, ensuring a seamless experience across different devices. Additionally, the app is hosted on GitHub using gh-pages, making it easily accessible via a simple link, so you can use it from anywhere.
                        </div>

                        <div className="title pb-2 pt-3 text-2xl">Developer Contact</div>
                        <div className="content text-xl text-left bg-slate-200 ">
                            Hello! I'm <b>Ansuman</b>, the developer behind this Meme Generator app. If you have any questions, suggestions, or feedback, please feel free to reach out to me. I'm here to assist you and improve your experience with the app. You can contact me via the following methods:<br/><br/>
                            - <b>Email</b>: ansumanpanigrahi00p@gmail.com <br/>
                            - <b> <a href="https://github.com/Ansuman-07" className='bg-blue-500 py-0.5 px-2 rounded hover:bg-blue-600 '>GitHub</a></b>  <b><a className='bg-blue-500 py-0.5 px-2 rounded hover:bg-blue-600' href="https://www.linkedin.com/in/ansuman-panigrahi-54890b244/">LinkedIn</a></b> <br/>
                            Don't hesitate to get in touch:) I'd love to hear from you!
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
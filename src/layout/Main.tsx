import Home from '../sections/Home'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Work from '../sections/Work'
import Contact from '../sections/Contact'

export default function Main() {
    return (
      <main className="bg-slate-50 dark:bg-slate-950
                       min-w-full flex-col justify-center items-center">
          <Home/>
          <About/>
          <Experience/>
          <Work/>
          <Contact/>
          <footer className="text-slate-950 dark:text-slate-50
                             flex justify-center items-center poppins-regular text-sm p-5 mt-25">
              © 2025 Jun Nathan Santos. All rights reserved.
          </footer>
      </main>
    )
}
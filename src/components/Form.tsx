export default function Form() {
    return (
        <form className="bg-slate-950/10 dark:bg-slate-50/10
                         rounded-2xl max-w-240 p-10 flex flex-col items-center">
            <div className="flex mb-5">
                <div className="flex flex-col mr-10">
                    <label className="text-slate-950/90 dark:text-slate-50/90
                                      poppins-semibold text-lg">Name</label>
                    <input className="bg-slate-950/10 text-slate-950 focus:bg-slate-50/20 dark:bg-slate-50/10 dark:text-slate-50 dark:focus:bg-slate-950/20
                                      rounded-sm w-100 px-2 py-1 poppins-regular text-sm
                                      focus:outline-none" type="text" name="user_name" />
                </div>
                <div className="flex flex-col">
                    <label className="text-slate-950/90 dark:text-slate-50/90
                                      poppins-semibold text-lg">Email</label>
                    <input className="bg-slate-950/10 text-slate-950 focus:bg-slate-50/20 dark:bg-slate-50/10 dark:text-slate-50 dark:focus:bg-slate-950/20
                                      rounded-sm w-100 px-2 py-1 poppins-regular text-sm
                                      focus:outline-none" type="email" name="user_email" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-slate-950/90 dark:text-slate-50/90
                                  poppins-semibold text-lg">Message</label>
                <textarea className="bg-slate-950/10 text-slate-950 focus:bg-slate-50/20 dark:bg-slate-50/10 dark:text-slate-50 dark:focus:bg-slate-950/20
                                     rounded-sm p-2 resize-none poppins-regular text-sm mb-8 w-210 h-50
                                     focus:outline-none"name="message" />
            </div>
            <input className="text-slate-950 dark:text-slate-50
                              border-blue-500 border-3 rounded-full text-base poppins-regular px-4 py-1 duration-300
                              hover:bg-blue-500 hover:duration-300 hover:cursor-pointer w-40 text-center" type="submit" value="Send" />
        </form>
    )
}
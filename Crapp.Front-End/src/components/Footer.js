export function Footer() {
    return <div className="bg-footer m-auto">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-col justify-center">
            <div className="m-auto">
                <img className="flex-col mt-3"  src="../logoKaiketsu-azul.png"></img>
                <p className="text-primary m-auto flex-2 text-center">© Copyright Grupo Pollo 2022</p>
            </div>
            <div className="p-5 w-fit m-auto flex justify-between ">
                <a 
                className="text-primary hover:text-black duration-150" href="/#">Services 
                    <span className="text-teal-600 text-xs p-1"></span>
                </a>

                <a 
                className="text-primary hover:text-black duration-150" href="/#">About Us 
                    <span className="text-teal-600 text-xs p-1"></span>
                </a>

                <a 
                className="text-primary hover:text-black duration-150" href="/#">Contact 
                    <span className="text-teal-600 text-xs p-1"></span>
                </a>
            </div>
        </div>
    </div>
}
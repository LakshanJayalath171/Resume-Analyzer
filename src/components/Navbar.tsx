const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-2">
            <img src="/icons/logo.png" className="h-6 w-6"/>
            <h2 className="text-secondary font-bold ">ResumeLens</h2>
        </div>

        <div className="flex items-center gap-6">
            <a href="" className="text-sm font-semibold text-indigo">Features</a>
            <a href="" className="text-sm font-semibold text-primary">How It Works</a>
            <a href="" className="text-sm font-semibold text-primary">Pricing</a>
        </div>

        <div className="flex items-center gap-2">
            <button className="text-sm font-medium text-primary btn-secondary px-4 py-2 rounded-lg">Sign In</button>

            <button className="text-sm font-medium text-white/80 px-4 py-2 rounded-lg bg-special">Get Started</button>
        </div>
    </nav>
  )
}

export default Navbar
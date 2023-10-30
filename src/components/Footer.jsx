
function Footer() {
  const date = new Date()
  return (
    <footer className="text-white/60 w-full flex justify-center p-[1rem] border-y border-white/10 my-[25px]">
        <p>&copy;{date.getFullYear()}</p>
    </footer>
  )
}

export default Footer

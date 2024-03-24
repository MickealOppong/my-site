const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  }
  return <footer className="px-8 mt-20 py-8">
    <div className="flex gap-x-1">
      <p>&#169;</p>
      <span>{currentYear()}</span>
      <p>Mike Oppong</p>
    </div>
  </footer>
}
export default Footer
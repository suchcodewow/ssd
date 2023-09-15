import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  const text = "I'm a nice boy."

  return (
      <div><p>hi mom.  Good to see you today.</p>
      <p className="text-sm"> {text}</p><ThemeToggle /></div>
  )
}

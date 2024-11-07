import { graphql, useStaticQuery } from "gatsby"
import { Menu } from "interface/menuInterfacfe"
import React from "react"

type UseHeaderReturn = {
  menus: Menu[]
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
  isScrolled: boolean
  toNavigate: (menu: Menu) => void
}

export default function useHeader(): UseHeaderReturn {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menus {
            title
            route
          }
        }
      }
    }
  `)

  const [menus, setMenus] = React.useState(data.site.siteMetadata.menus)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    setMenus(prevMenus =>
      prevMenus.map(item =>
        item.route === "/home"
          ? { ...item, activated: true }
          : { ...item, activated: false }
      )
    )

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toNavigate = (menu: Menu) => {
    setMenus(
      menus.map(m => ({
        ...m,
        activated: m.route === menu.route,
      }))
    )

    if (menu.route === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (menu.route === "#contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } else if (menu.route.startsWith("#")) {
      const sectionId = menu.route.slice(1)
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return { menus, isMenuOpen, setIsMenuOpen, isScrolled, toNavigate }
}

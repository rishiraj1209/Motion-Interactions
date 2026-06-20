import type { LucideIcon } from 'lucide-react'
import { Home, Folder, Mail, LayoutDashboard } from 'lucide-react'

export interface SidebarItem {
  id: string
  label: string
  href: string
  icon: LucideIcon
}

export const sidebarData: SidebarItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'projects', label: 'Projects', href: '/projects', icon: Folder },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
]

export default sidebarData

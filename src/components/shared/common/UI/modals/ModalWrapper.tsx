'use client'
 
export default function ModalWrapper({ children, show, className }: { children: React.ReactNode, show: boolean, className?: string }) {
  return (
    show ? <div className={`w-screen h-screen fixed left-0 top-0 flex justify-center items-center ${className}`} style={{background: 'rgba(255, 255, 255, .9)', zIndex: 999}}>
      {children}
    </div> : ''
  )
}
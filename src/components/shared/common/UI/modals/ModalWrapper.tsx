'use client'
 
export default function ModalWrapper({ children, show }: { children: React.ReactNode, show: boolean }) {
  return (
    show ? <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center" style={{background: 'rgba(0, 0, 0, .8)', zIndex: 99999}}>
      {children}
    </div> : ''
  )
}
'use client'
 
export default function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center" style={{background: 'rgba(255, 255, 255, .8)', zIndex: 99999}}>
      {children}
    </div>
  )
}
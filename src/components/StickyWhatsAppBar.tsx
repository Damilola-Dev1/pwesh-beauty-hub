import { WHATSAPP_NUMBER } from '../config/whatsapp'
import { GENERAL_MESSAGE } from '../config/messages'

function StickyWhatsAppBar() {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GENERAL_MESSAGE)}`} 
      target="_blank" 
      rel="noreferrer" 
      className="fixed bottom-0 left-0 right-0 z-50 bg-pwesh-purple py-4 text-center font-semibold text-white md:hidden"
    >
      Chat with us on WhatsApp
    </a>
  )
}

export default StickyWhatsAppBar
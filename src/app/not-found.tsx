import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="w-full md:w-2/5 bg-blue-600 flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Accès limité</h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <Image
                src="/prestacomm.jpg"
                alt="Prestacomm Logo"
                width={180}
                height={60}
                className="object-contain mx-auto bg-white p-3 rounded-lg"
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Page pas encore payée</h2>
            
            <div className="h-1 w-16 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-600 mb-8">
              Pour avoir accès à cette page, veuillez contacter notre équipe.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+33679160353" className="text-blue-600 hover:underline font-medium">
                  +33 6 79 16 03 53
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:lorickcots@prestacomm.fr" className="text-blue-600 hover:underline font-medium">
                  lorickcots@prestacomm.fr
                </a>
              </div>
            </div>
            
            <Link 
              href="/" 
              className="inline-flex items-center bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Retour à l'accueil</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

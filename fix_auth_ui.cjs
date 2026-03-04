const fs = require('fs');

let content = fs.readFileSync('components/Auth.tsx', 'utf8');

// Inside view === 'HOME' block, conditionally render the buttons based on settings.authConfig
// Defaulting to true if authConfig is undefined.
const targetBlock = `{view === 'HOME' && (
            <div className="space-y-6 relative z-10 animate-in fade-in mt-10">
                 <button type="button" onClick={handleGoogleAuth} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                     <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                     Continue with Google
                 </button>

                 <button type="button" onClick={() => setView('SIGNUP')} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                     Sign up
                 </button>

                 <button type="button" onClick={() => setView('LOGIN')} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                     Log in
                 </button>
            </div>
        )}`;

const replacementBlock = `{view === 'HOME' && (
            <div className="space-y-6 relative z-10 animate-in fade-in mt-10">
                 {(settings?.authConfig?.isGoogleAuthEnabled ?? true) && (
                     <button type="button" onClick={handleGoogleAuth} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                         <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                         Continue with Google
                     </button>
                 )}

                 {(settings?.authConfig?.isEmailAuthEnabled ?? true) && (
                     <>
                         <button type="button" onClick={() => setView('SIGNUP')} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                             Sign up
                         </button>

                         <button type="button" onClick={() => setView('LOGIN')} className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#1e293b] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95">
                             Log in
                         </button>
                     </>
                 )}

                 {!(settings?.authConfig?.isGoogleAuthEnabled ?? true) && !(settings?.authConfig?.isEmailAuthEnabled ?? true) && (
                     <p className="text-center text-slate-500 font-bold text-sm">Login is currently disabled by Admin.</p>
                 )}
            </div>
        )}`;

if (content.includes(targetBlock)) {
    content = content.replace(targetBlock, replacementBlock);
    fs.writeFileSync('components/Auth.tsx', content);
    console.log("Updated Auth.tsx successfully.");
} else {
    console.log("Could not find the block in Auth.tsx.");
}

const fs = require('fs');
let code = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

const targetStr = `{/* APP IDENTITY & AI CHAT */}`;
const replacement = `{/* AUTHENTICATION TOGGLES (NEW) */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-700 mb-3">Authentication Options</h4>
                      <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">G</div>
                                  <div>
                                      <p className="font-bold text-slate-700 text-sm">Google Auth</p>
                                      <p className="text-[10px] text-slate-400">Allow users to sign in with Google.</p>
                                  </div>
                              </div>
                              <input
                                  type="checkbox"
                                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                                  checked={localSettings.authConfig?.isGoogleAuthEnabled ?? true}
                                  onChange={(e) => setLocalSettings({...localSettings, authConfig: {...(localSettings.authConfig || {}), isGoogleAuthEnabled: e.target.checked}})}
                              />
                          </div>

                          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">@</div>
                                  <div>
                                      <p className="font-bold text-slate-700 text-sm">Email Auth</p>
                                      <p className="text-[10px] text-slate-400">Allow users to sign in with Email/Password.</p>
                                  </div>
                              </div>
                              <input
                                  type="checkbox"
                                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                                  checked={localSettings.authConfig?.isEmailAuthEnabled ?? true}
                                  onChange={(e) => setLocalSettings({...localSettings, authConfig: {...(localSettings.authConfig || {}), isEmailAuthEnabled: e.target.checked}})}
                              />
                          </div>
                      </div>
                  </div>

                  {/* APP IDENTITY & AI CHAT */}`;

if(code.includes(targetStr)) {
    code = code.replace(targetStr, replacement);
    fs.writeFileSync('components/AdminDashboard.tsx', code);
    console.log("Added auth toggles to AdminDashboard.");
} else {
    console.log("Could not find the target string in AdminDashboard.");
}

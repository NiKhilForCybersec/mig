// Unified Sidebar Component for Security Engineer Portfolio
const sidebarHTML = `
<aside id="sidebar" class="sidebar fixed top-0 left-0 h-full w-64 bg-[#0a0a0f] border-r border-[#2a2a3e] z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 overflow-y-auto">
    <div class="p-4">
        <a href="{{BASE}}index.html" class="flex items-center gap-3 mb-4 p-2 rounded-lg hover:bg-[#1a1a2e]">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div><p class="text-white font-bold text-sm">Security Engineer</p><p class="text-[10px] text-gray-500">Knowledge Base</p></div>
        </a>
        <a href="{{BASE}}pages/cheatsheet.html" class="flex items-center gap-2 px-3 py-2 mb-2 text-sm text-yellow-400 rounded-lg bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20">
            <span>🧠</span><span class="font-medium">Cheat Sheet</span>
        </a>
        <a href="{{BASE}}pages/interview-prep.html" class="flex items-center gap-2 px-3 py-2 mb-2 text-sm text-cyan-400 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20">
            <span>🎯</span><span class="font-medium">Interview Prep</span>
        </a>
        <a href="{{BASE}}pages/interview-deep-dive.html" class="flex items-center gap-2 px-3 py-2 mb-2 text-sm text-emerald-400 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20">
            <span>🧠</span><span class="font-medium">Deep Dive (Why)</span>
        </a>
        <a href="{{BASE}}pages/coca-cola-interview.html" class="flex items-center gap-2 px-3 py-2 mb-4 text-sm text-red-400 rounded-lg bg-red-500/10 border border-red-500/30 hover:bg-red-500/20">
            <span>🥤</span><span class="font-medium">Coca-Cola Prep</span>
        </a>
        <nav class="space-y-1" id="sidebar-nav">
            <div class="nav-section">
                <button onclick="toggleSec('core')" class="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-white rounded hover:bg-[#1a1a2e] uppercase tracking-wider">
                    <span>Core Security</span><svg id="core-arr" class="w-3 h-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="core-lnk" class="ml-2 space-y-0.5">
                    <a href="{{BASE}}pages/iam-security.html" class="slink" data-p="iam-security"><span class="dot bg-blue-500"></span>IAM Security</a>
                    <a href="{{BASE}}pages/incident-response.html" class="slink" data-p="incident-response"><span class="dot bg-red-500"></span>Incident Response</a>
                    <a href="{{BASE}}pages/soc-operations.html" class="slink" data-p="soc-operations"><span class="dot bg-cyan-500"></span>SOC Operations</a>
                    <a href="{{BASE}}pages/threat-intelligence.html" class="slink" data-p="threat-intelligence"><span class="dot bg-purple-500"></span>Threat Intelligence</a>
                    <a href="{{BASE}}pages/network-security.html" class="slink" data-p="network-security"><span class="dot bg-green-500"></span>Network Security</a>
                    <a href="{{BASE}}pages/ngfw-deep-dive.html" class="slink" data-p="ngfw-deep-dive"><span class="dot bg-orange-500"></span>NGFW Deep Dive</a>
                    <a href="{{BASE}}pages/ot-security.html" class="slink" data-p="ot-security"><span class="dot bg-red-500"></span>OT/ICS Security</a>
                    <a href="{{BASE}}pages/cloud-security.html" class="slink" data-p="cloud-security"><span class="dot bg-blue-400"></span>Cloud Security</a>
                    <a href="{{BASE}}pages/zero-trust.html" class="slink" data-p="zero-trust"><span class="dot bg-red-400"></span>Zero Trust</a>
                    <a href="{{BASE}}pages/data-security.html" class="slink" data-p="data-security"><span class="dot bg-purple-400"></span>Data Security</a>
                    <a href="{{BASE}}pages/application-security.html" class="slink" data-p="application-security"><span class="dot bg-orange-500"></span>Application Security</a>
                    <a href="{{BASE}}pages/compliance.html" class="slink" data-p="compliance"><span class="dot bg-blue-500"></span>Compliance</a>
                    <a href="{{BASE}}pages/pentest.html" class="slink" data-p="pentest"><span class="dot bg-red-500"></span>Pen Testing</a>
                    <a href="{{BASE}}pages/security-awareness.html" class="slink" data-p="security-awareness"><span class="dot bg-yellow-500"></span>Security Awareness</a>
                </div>
            </div>
            <div class="nav-section">
                <button onclick="toggleSec('mig')" class="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-white rounded hover:bg-[#1a1a2e] uppercase tracking-wider">
                    <span>RSA → Sentinel</span><svg id="mig-arr" class="w-3 h-3 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="mig-lnk" class="ml-2 space-y-0.5 hidden">
                    <a href="{{BASE}}pages/overview.html" class="slink" data-p="overview"><span class="dot bg-cyan-500"></span>Overview</a>
                    <a href="{{BASE}}pages/architecture.html" class="slink" data-p="architecture"><span class="dot bg-blue-500"></span>Architecture</a>
                    <a href="{{BASE}}pages/correlation.html" class="slink" data-p="correlation"><span class="dot bg-purple-500"></span>Correlation</a>
                    <a href="{{BASE}}pages/parsers.html" class="slink" data-p="parsers"><span class="dot bg-green-500"></span>Parsers</a>
                    <a href="{{BASE}}pages/playbooks.html" class="slink" data-p="playbooks"><span class="dot bg-orange-500"></span>Playbooks</a>
                    <a href="{{BASE}}pages/metrics.html" class="slink" data-p="metrics"><span class="dot bg-yellow-500"></span>Metrics</a>
                    <a href="{{BASE}}pages/challenges.html" class="slink" data-p="challenges"><span class="dot bg-red-500"></span>Challenges</a>
                </div>
            </div>
            <div class="nav-section">
                <button onclick="toggleSec('rul')" class="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-white rounded hover:bg-[#1a1a2e] uppercase tracking-wider">
                    <span>Detection Rules</span><svg id="rul-arr" class="w-3 h-3 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="rul-lnk" class="ml-2 space-y-0.5 hidden">
                    <a href="{{BASE}}pages/rules-catalog.html" class="slink" data-p="rules-catalog"><span class="dot bg-cyan-500"></span>Catalog</a>
                    <a href="{{BASE}}pages/rules-auth.html" class="slink" data-p="rules-auth"><span class="dot bg-red-500"></span>Auth</a>
                    <a href="{{BASE}}pages/rules-malware.html" class="slink" data-p="rules-malware"><span class="dot bg-red-400"></span>Malware</a>
                    <a href="{{BASE}}pages/rules-exfil.html" class="slink" data-p="rules-exfil"><span class="dot bg-orange-500"></span>Exfil</a>
                    <a href="{{BASE}}pages/rules-endpoint.html" class="slink" data-p="rules-endpoint"><span class="dot bg-purple-500"></span>Endpoint</a>
                    <a href="{{BASE}}pages/rules-privilege.html" class="slink" data-p="rules-privilege"><span class="dot bg-orange-400"></span>Privilege</a>
                    <a href="{{BASE}}pages/rules-insider.html" class="slink" data-p="rules-insider"><span class="dot bg-yellow-500"></span>Insider</a>
                    <a href="{{BASE}}pages/rules-cloud.html" class="slink" data-p="rules-cloud"><span class="dot bg-blue-500"></span>Cloud</a>
                    <a href="{{BASE}}pages/rules-salesforce.html" class="slink" data-p="rules-salesforce"><span class="dot bg-blue-400"></span>Salesforce</a>
                </div>
            </div>
            <div class="nav-section">
                <button onclick="toggleSec('msft')" class="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-white rounded hover:bg-[#1a1a2e] uppercase tracking-wider">
                    <span>Microsoft</span><svg id="msft-arr" class="w-3 h-3 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="msft-lnk" class="ml-2 space-y-0.5 hidden">
                    <a href="{{BASE}}pages/defender-stack.html" class="slink" data-p="defender-stack"><span class="dot bg-blue-500"></span>Defender Stack</a>
                    <a href="{{BASE}}pages/dlp-migration.html" class="slink" data-p="dlp-migration"><span class="dot bg-purple-500"></span>DLP Migration</a>
                    <a href="{{BASE}}pages/casb-salesforce.html" class="slink" data-p="casb-salesforce"><span class="dot bg-cyan-500"></span>CASB</a>
                </div>
            </div>
            <div class="nav-section">
                <button onclick="toggleSec('ref')" class="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-white rounded hover:bg-[#1a1a2e] uppercase tracking-wider">
                    <span>Reference</span><svg id="ref-arr" class="w-3 h-3 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div id="ref-lnk" class="ml-2 space-y-0.5 hidden">
                    <a href="{{BASE}}pages/email-security.html" class="slink" data-p="email-security"><span class="dot bg-orange-500"></span>Email Security</a>
                    <a href="{{BASE}}pages/vuln-management.html" class="slink" data-p="vuln-management"><span class="dot bg-red-500"></span>Vuln Mgmt</a>
                    <a href="{{BASE}}pages/mitre-attack.html" class="slink" data-p="mitre-attack"><span class="dot bg-red-400"></span>MITRE ATT&CK</a>
                    <a href="{{BASE}}pages/log-analysis.html" class="slink" data-p="log-analysis"><span class="dot bg-green-500"></span>Log Analysis</a>
                    <a href="{{BASE}}pages/tools.html" class="slink" data-p="tools"><span class="dot bg-indigo-500"></span>Tools</a>
                    <a href="{{BASE}}pages/reference.html" class="slink" data-p="reference"><span class="dot bg-gray-500"></span>Reference</a>
                </div>
            </div>
        </nav>
    </div>
</aside>
<button id="mob-btn" onclick="toggleMob()" class="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#12121a] border border-[#2a2a3e] text-white">
    <svg id="m-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    <svg id="m-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
</button>
<div id="overlay" onclick="toggleMob()" class="lg:hidden fixed inset-0 bg-black/50 z-40 hidden"></div>
`;

const sidebarCSS = `<style>
.slink{display:flex;align-items:center;gap:0.5rem;padding:0.25rem 0.5rem;font-size:0.75rem;color:#9ca3af;border-radius:0.25rem;transition:all 0.15s}
.slink:hover{color:#fff;background:rgba(59,130,246,0.1)}
.slink.active{color:#fff;background:rgba(59,130,246,0.2);border-left:2px solid #3b82f6}
.dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
</style>`;

function initSidebar(){
    const inPages=location.pathname.includes('/pages/');
    const base=inPages?'../':'';
    document.body.insertAdjacentHTML('afterbegin',sidebarCSS+sidebarHTML.replace(/\{\{BASE\}\}/g,base));
    const curr=location.pathname.split('/').pop().replace('.html','');
    const link=document.querySelector('[data-p="'+curr+'"]');
    if(link){
        link.classList.add('active');
        const sec=link.closest('[id$="-lnk"]');
        if(sec){sec.classList.remove('hidden');const arr=document.getElementById(sec.id.replace('-lnk','-arr'));if(arr)arr.classList.remove('rotate-180');}
    }
}
function toggleSec(n){const l=document.getElementById(n+'-lnk'),a=document.getElementById(n+'-arr');if(l&&a){l.classList.toggle('hidden');a.classList.toggle('rotate-180');}}
function toggleMob(){const s=document.getElementById('sidebar'),o=document.getElementById('overlay'),op=document.getElementById('m-open'),cl=document.getElementById('m-close');s.classList.toggle('-translate-x-full');o.classList.toggle('hidden');op.classList.toggle('hidden');cl.classList.toggle('hidden');}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initSidebar);}else{initSidebar();}

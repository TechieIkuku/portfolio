const input = document.getElementById('terminal-input');
const terminal = document.getElementById('terminal');

const commands = {
    help: "Commands: [about, skills, projects, contact, clear]",
    about: "IkukuTech: 5+ years of Fullstack Dev & Ethical Hacking. I build high-security systems.",
    skills: "React, Node.js, Python, Go, Docker, BurpSuite, Metasploit, AWS.",
    projects: "1. Fintech Hardening | 2. Real-time SaaS | 3. Automated DAST Pipeline",
    contact: "Email: contact@ikukutech.com | LinkedIn: /in/ikukutech",
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.style.margin = "5px 0";

        if (cmd === 'clear') {
            terminal.innerHTML = '<div class="output">Terminal Cleared.</div>';
        } else if (commands[cmd]) {
            line.innerHTML = `<span style="color: #fff;">$ ${cmd}</span><br>${commands[cmd]}`;
            terminal.insertBefore(line, input.parentElement);
        } else if (cmd !== "") {
            line.innerHTML = `<span style="color: #ff5f56;">Command '${cmd}' not found.</span>`;
            terminal.insertBefore(line, input.parentElement);
        }

        input.value = '';
        terminal.scrollTop = terminal.scrollHeight;
    }
});

// Auto-focus terminal on click
document.addEventListener('click', (e) => {
    if (e.target.closest('.terminal-window')) input.focus();
});
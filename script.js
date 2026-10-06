// ===== CONFIGURAÇÕES =====
const ebookPrice = "R$ 97,00";
const checkoutUrl = "https://pay.cakto.com.br/3dqrceo_1165099";

// Atualizar preço dinâmico
document.addEventListener('DOMContentLoaded', () => {
    const precoDisplay = document.getElementById('preco-display');
    if (precoDisplay) {
        precoDisplay.textContent = ebookPrice;
    }

    inicializarFuncionalidades();
});

function inicializarFuncionalidades() {
    setupMenuResponsivo();
    setupBotoesCTA();
    setupAccordion();
    setupCtaMobile();
    setupScrollAnimations();
}

// ===== MENU RESPONSIVO =====
function setupMenuResponsivo() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// ===== BOTÕES CTA =====
function setupBotoesCTA() {
    const botoesCtaRelated = document.querySelectorAll('[data-action="cta"]');

    botoesCtaRelated.forEach(botao => {
        botao.addEventListener('click', () => {
            if (checkoutUrl === "#") {
                console.warn('URL de checkout não configurada. Configure a variável checkoutUrl no script.js');
                return;
            }
            window.location.href = checkoutUrl;
        });
    });
}

// ===== ACCORDION FAQ =====
function setupAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqId = trigger.getAttribute('data-faq');
            const faqAnswer = document.getElementById(faqId);

            if (!faqAnswer) return;

            // Fechar outros acordeões
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.classList.remove('active');
                    const outroId = otherTrigger.getAttribute('data-faq');
                    const outroAnswer = document.getElementById(outroId);
                    if (outroAnswer) {
                        outroAnswer.classList.remove('open');
                    }
                }
            });

            // Toggle do acordeão atual
            trigger.classList.toggle('active');
            faqAnswer.classList.toggle('open');
        });
    });
}

// ===== CTA MOBILE FIXO =====
function setupCtaMobile() {
    const ctaMobile = document.getElementById('ctaMobile');
    let lastScrollPosition = 0;

    if (!ctaMobile) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Mostrar/esconder CTA mobile baseado no scroll
        if (currentScroll > 500) {
            if (currentScroll > lastScrollPosition) {
                // Scroll para baixo - esconder CTA
                ctaMobile.style.transform = 'translateY(100%)';
            } else {
                // Scroll para cima - mostrar CTA
                ctaMobile.style.transform = 'translateY(0)';
            }
        } else {
            ctaMobile.style.transform = 'translateY(100%)';
        }

        lastScrollPosition = currentScroll;
    });
}

// ===== ANIMAÇÕES AO SCROLL =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observar elementos com animações
    const elementsToAnimate = document.querySelectorAll(
        '.problema-card, .aprender-card, .conteudo-item, .beneficio-item, .para-quem-card, .o-que-recebe-item, .faq-item'
    );

    elementsToAnimate.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// ===== SUPORTE A PROGRESSIVE ENHANCEMENT =====
// Garantir que a página funciona mesmo sem JavaScript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setupFallbacks();
    });
} else {
    setupFallbacks();
}

function setupFallbacks() {
    // Fallback para navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.cursor = 'pointer';
    });

    // Verificar suporte a imagens
    const ebookImages = document.querySelectorAll('.ebook-cover, .ebook-cover-large');
    ebookImages.forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
            console.warn('Imagem de capa não encontrada. Certifique-se de adicionar assets/capa-ebook.png');
        };
    });
}

// ===== UTILITÁRIOS =====

// Função para atualizar preço dinamicamente (caso necessário)
function atualizarPreco(novoPreco) {
    window.ebookPrice = novoPreco;
    const precoDisplay = document.getElementById('preco-display');
    if (precoDisplay) {
        precoDisplay.textContent = novoPreco;
    }
}

// Função para atualizar URL de checkout dinamicamente
function atualizarCheckoutUrl(novaUrl) {
    window.checkoutUrl = novaUrl;
}

// Exportar funções globalmente se necessário
window.atualizarPreco = atualizarPreco;
window.atualizarCheckoutUrl = atualizarCheckoutUrl;
window.ebookPrice = ebookPrice;
window.checkoutUrl = checkoutUrl;

// ===== MONITORAMENTO BÁSICO =====
console.log('Sexualidade Inteligente - Landing Page Carregada');
console.log('Preço:', ebookPrice);
console.log('Checkout URL:', checkoutUrl !== "#" ? "Configurada" : "Não configurada - use atualizarCheckoutUrl()");

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > .1) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, { root: null, rootMargin: '0px', threshold: .1 });
document.querySelectorAll('[class*="reveal"]').forEach(function(r) { observer.observe(r) });
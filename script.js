
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn");
  const nav=document.querySelector(".nav-links");
  if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));

  const path=location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.getAttribute("href")===path) a.classList.add("active");
  });

  const search=document.querySelector("#siteSearch");
  const cards=[...document.querySelectorAll("[data-search]")];
  if(search && cards.length){
    search.addEventListener("input",()=>{
      const q=search.value.toLowerCase().trim();
      cards.forEach(c=>c.style.display=c.dataset.search.toLowerCase().includes(q)?"":"none");
    });
  }

  document.querySelectorAll("[data-filter]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const value=btn.dataset.filter;
      document.querySelectorAll("[data-category]").forEach(card=>{
        card.style.display=(value==="all"||card.dataset.category===value)?"":"none";
      });
    });
  });

  const form=document.querySelector("#contactForm");
  if(form){
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const msg=document.querySelector("#formMessage");
      msg.textContent="Thank you! Your message has been recorded in this demo website.";
      msg.style.display="block";
      form.reset();
    });
  }
});

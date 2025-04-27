const shareToggle = document.getElementById("shareToggle");
const shareButtons = document.getElementById("shareButtons");
const copyLinkBtn = document.getElementById("copyLink");

shareToggle.addEventListener("click", () => {
  shareButtons.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !shareButtons.contains(e.target) &&
    !shareToggle.contains(e.target)
  ) {
    shareButtons.classList.remove("active");
  }
});

document.querySelectorAll("[data-platform]").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const platform = button.dataset.platform;
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    let shareUrl = "";

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${pageTitle}&body=Check this out: ${pageUrl}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    }
  });
});

copyLinkBtn.addEventListener("click", () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    copyLinkBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(() => {
      copyLinkBtn.innerHTML = '<i class="fa-solid fa-link"></i> Copy Link';
    }, 2000);
  }, () => {
    alert("Failed to copy link.");
  });
});

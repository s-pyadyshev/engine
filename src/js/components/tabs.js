export const tabs = (() => {
  const init = () => {
    const tabContainers = document.querySelectorAll("[data-tabs]");

    if (!tabContainers.length) {
      return;
    }

    tabContainers.forEach((tabContainer) => {
      const currentTab = tabContainer.getAttribute("data-tabs");

      tabContainer.addEventListener("click", (event) => {
        const target = event.target;

        if (
          target.parentElement.getAttribute("data-tabs") === "tabs-services"
        ) {
          const childTabs = document
            .querySelector(
              `[data-tab-content=${target.getAttribute("data-tab")}]`
            )
            .querySelectorAll(".service__footer button");
          childTabs.forEach((item) => item.classList.remove("is-active"));

          childTabs[0].classList.add("is-active");

          const childTabsContent = document
            .querySelector(
              `[data-tab-content=${target.getAttribute("data-tab")}]`
            )
            .querySelector(".service__content")
            .nextElementSibling.querySelectorAll("[data-tab-content]");

          childTabsContent.forEach((item) =>
            item.classList.remove("is-active")
          );

          childTabsContent[0].classList.add("is-active");
        }

        if (!target.hasAttribute("data-tab")) {
          return;
        }

        const tabButton = target;
        const tabId = tabButton.getAttribute("data-tab");
        const matchingTabDataAll = document.querySelectorAll(
          `[data-tabs-content="${currentTab}"] > [data-tab-content]`
        );
        const matchingTabData = document.querySelector(
          `[data-tabs-content="${currentTab}"] > [data-tab-content="${tabId}"]`
        );

        const activeTabContent = document.querySelector(
          `[data-tabs-content="${currentTab}"] > [data-tab-content].is-active`
        );

        const activeTabButton = document.querySelector(
          `[data-tabs=${currentTab}] > button.is-active`
        );

        const tabButtonAll = document.querySelectorAll(
          `[data-tabs=${currentTab}] > button`
        );

        matchingTabDataAll.forEach((item) =>
          item.classList.remove("is-active")
        );
        activeTabContent.classList.remove("is-active");
        activeTabButton.classList.remove("is-active");

        tabButtonAll.forEach((item) => item.classList.remove("is-active"));
        matchingTabData.classList.add("is-active");
        tabButton.classList.add("is-active");
      });
    });
  };

  return {
    init,
  };
})();

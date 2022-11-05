<script setup></script>

<template>
  <div class="text-sm text-gray-400">
    <nav
      class="bg-gray-800 text-white px-8 py-3 flex bg-gray-800 justify-between items-center"
    >
      <div class="flex space-x-4 items-center">
        <a href="#" class="text-white hover:text-gray-400">
          <svg
            class="fill-current w-8"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <div class="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search or jump to..."
            class="bg-gray-700 placeholder-gray rounded px-3 py-1 w-72"
          />
          <div class="absolute top-0 right-0 flex items-center h-full">
            <div
              class="mr-2 border border-gray-600 rounded text-xs text-gray-400 px-2"
            >
              /
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block flex items-center text-white space-x-4 font-semibold"
        >
          <a href="#" class="hover:text-gray-400">Pull requests</a>
          <a href="#" class="hover:text-gray-400">Issues</a>
          <a href="#" class="hover:text-gray-400">Marketplace</a>
          <a href="#" class="hover:text-gray-400">Explore</a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-white hover:text-gray-400"
          ><svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="fill-current"
          >
            <path
              d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
            ></path>
          </svg>
        </a>
        <a href="#" class="text-white flex items-center hover:text-gray-400"
          ><svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3 ml-1"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a href="#" class="flex items-center hover:text-gray-400">
          <img
            src="https://avatars.githubusercontent.com/u/82011520?s=40&amp;v=4"
            alt="@ishfaqahmed565"
            size="20"
            height="20"
            data-view-component="true"
            class="rounded-xl w-5 border border-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3 ml-1"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
    <!--Repo-specs starts-->
    <div class="flex flex-col pt-5 px-8 border-b-[1px] border-gray-900">
      <div
        class="flex flex-col lg:flex-row lg:items-center justify-between mb-10"
      >
        <div class="flex items-center space-x-3 relative">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
            class="w-4 text-gray-400 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <div class="flex lg:items-center space-x-1 text-xl">
            <a href="#" class="text-blue-400 hover:underline">ishfaqahmed565</a>
            <span class="font-thin text-gray-300">/</span>
            <a href="#" class="text-blue-400 hover:underline"
              >project-manager</a
            >
          </div>
          <span
            class="text-gray-400 text-xs border border-gray-700 rounded-xl px-2"
          >
            Public
          </span>
        </div>
        <div class="hidden lg:block flex items-center space-x-2 mt-2 lg:mt-0">
          <button
            class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded px-2 py-1 bg-gray-700"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="text-white fill-current mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z"
              ></path>
            </svg>
            Pin
          </button>
          <button
            class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded px-2 py-1 bg-gray-700"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="text-white fill-current mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
            Unwatch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-3 ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div class="flex items-center">
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded-l px-3 py-1 bg-gray-700"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-white fill-current mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              Fork
            </button>
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded-r px-2 py-2 bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center max-h-1">
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded-l px-3 py-1 bg-gray-700"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-white fill-current mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              Star
            </button>
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded-r px-2 py-2 bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav>
        <ul class="flex items-center space-x-3">
          <li>
            <a
              class="hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                ></path>
              </svg>
              Code</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: false }"
            />
          </li>
          <li>
            <a
              class="hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
              </svg>
              Issues</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                ></path>
              </svg>
              Pull requests</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover:cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                ></path>
              </svg>
              Actions</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover:cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                ></path>
              </svg>
              Projects</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                ></path>
              </svg>
              Wiki</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                ></path>
              </svg>
              Security</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                ></path>
              </svg>
              Insights</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
          <li>
            <a
              class="hidden lg:block hover: cursor-pointer text-gray-200 flex items-center gap-2 hover:bg-gray-700 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-gray-400 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Settings</a
            >
            <hr
              class="border-t-3 border-orange-900"
              :class="{ invisible: true }"
            />
          </li>
        </ul>
      </nav>
    </div>

    <!--Repo-specs ends-->

    <!--File Explorer Container starts-->
    <div class="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
      <div class="w-full lg:w-3/4 mr-7">
        <div class="branch-navigation flex items-center justify-between">
          <div class="flex space-x-2">
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded px-2 py-1 bg-gray-700"
            >
              <svg
                text="gray"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="text-white fill-current mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                ></path>
              </svg>
              master
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <a
              class="hidden lg:block hover:cursor-pointer text-gray-200 flex items-center gap-1 hover:text-blue-400 py-1 px-2 rounded mb-2"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <strong class="font-bold">25</strong>branches</a
            >
            <a
              class="hidden lg:block hover:cursor-pointer text-gray-200 flex items-center gap-1 hover:text-blue-400 py-1 px-2 rounded mb-2"
            >
              <svg
                text="gray"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="fill-current mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
                ></path>
              </svg>

              <strong class="font-bold">0</strong>tags</a
            >
          </div>
          <div class="flex space-x-2 hidden lg:block">
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded px-3 py-1 bg-gray-700"
            >
              Go to file
            </button>
            <button
              class="flex items-center text-gray-200 border-2 border-gray-600 hover:border-gray-400 rounded px-3 py-1 bg-gray-700"
            >
              Add File
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              class="flex items-center text-gray-200 border-3 border-gray-700 hover:border-gray-400 rounded font-bold px-3 py-1 bg-green-600"
            >
              Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="file-explorer border-2 border-gray-700 my-5 rounded-lg">
          <div
            class="file-explorer-header flex justify-between bg-gray-700 border border-gray-600 py-3 px-3 rounded-t-lg"
          >
            <div class="branchowner">
              <a
                href="#"
                class="flex items-center space-x-2 hover:text-gray-400 hover:underline text-gray-300"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/82011520?s=40&amp;v=4"
                  alt="@ishfaqahmed565"
                  size="20"
                  height="20"
                  data-view-component="true"
                  class="rounded-xl w-6 border border-white"
                />
                <span>ishfaqahmed565</span>
              </a>
            </div>
            <div class="flex items-center space-x-3 text-gray-300">
              <a href="#" class="font-xs font-thin hover:text-blue-400"
                >f95568f</a
              >
              <a href="#" class="font-xs font-thin hover:text-blue-400"
                >on Nov 2, 2022</a
              >
              <a
                href="#"
                class="font-xs font-thin hover:text-blue-400 flex items-center space-x-2"
                ><svg
                  text="gray"
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                  ></path>
                </svg>
                <span class="text-inehrit font-bold pr-1">44</span>commits</a
              >
            </div>
          </div>
          <ul>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
            <li>
              <div
                class="flex items-center justify-between px-3 py-2 border-b-2 border-gray-800 hover:bg-gray-700"
              >
                <div class="flex items-center space-x-3">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="text-gray-400 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a href="#" class="hover:text-blue-400 hover:underline"
                    >assets</a
                  >
                </div>
                <div class="w-80">
                  <a
                    href="#"
                    class="font-xs font-thin hover:text-blue-400 hover:underline"
                    >My first commit</a
                  >
                </div>

                <a
                  href="#"
                  class="font-xs font-thin hover:text-blue-400 hover:underline"
                  >3 days ago</a
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="readme-card border-2 border-gray-700 my-5 rounded-lg px-3">
          <div
            class="details-card-header flex justify-between border-b border-gray-600 py-3 rounded-t-lg"
          >
            <div>
              <a
                href="#"
                class="flex items-center space-x-4 hover:text-blue-400 hover:underline text-gray-300"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
                  ></path>
                </svg>
                <h4>README.md</h4>
              </a>
            </div>
          </div>
          <div class="prose max-w-none px-4">
            <Readme />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 sidebar flex flex-col space-y-5">
        <div class="about-section flex flex-col space-y-5">
          <h3 class="text-base font-semibold text-white">About</h3>
          <p class="text-sm font-thin text-white">
            A utility-first CSS framework for rapid UI development.
          </p>
          <div class="flex items-center space-x-1">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="text-gray-400 fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
              ></path>
            </svg>
            <a href="#" class="text-blue-400 hover:underline font-semibold"
              >tailwindcss.com/</a
            >
          </div>
          <div
            class="tags flex items-center flex-wrap font-semibold text-xs max-w-[80%]"
          >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >css</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >postcss</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >responsive</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >css-framework</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >functional-css</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >utility-classes</a
            >
            <a
              href="#"
              class="rounded-full bg-blue-800 hover:bg-blue-600 text-blue-300 mt-1 hover:text-white py-1 px-2 mr-2"
              >tailwindcss</a
            >
          </div>
          <ul class="flex flex-col space-y-2">
            <li>
              <a href="#" class="flex items-center space-x-3 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="group-hover:text-blue-400 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                <span class="group-hover:text-blue-400">Readme</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-3 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="group-hover:text-blue-400 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                  ></path>
                </svg>
                <span class="group-hover:text-blue-400">MIT license</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-3 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="group-hover:text-blue-400 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.048 2.241c.964-.709 2.079-1.238 3.325-1.241a4.613 4.613 0 013.282 1.355c.41.408.757.86.996 1.428.238.568.348 1.206.347 1.968 0 2.193-1.505 4.254-3.081 5.862-1.496 1.526-3.213 2.796-4.249 3.563l-.22.163a.75.75 0 01-.895 0l-.221-.163c-1.036-.767-2.753-2.037-4.249-3.563C1.51 10.008.007 7.952.002 5.762a4.614 4.614 0 011.353-3.407C3.123.585 6.223.537 8.048 2.24zm-1.153.983c-.81.78-1.546 1.669-2.166 2.417-.184.222-.358.432-.52.623a.75.75 0 00.04 1.016c.35.35.697.697 1.043 1.047.866.875 2.292.914 3.185.032.264-.26.534-.528.802-.797.694-.694 1.8-.701 2.474-.03L12.92 8.7l.283.284c-.244.334-.515.666-.81.995l-1.384-1.28A.75.75 0 109.99 9.802l1.357 1.252c-.325.31-.656.606-.984.887l-1.48-1.366a.75.75 0 10-1.018 1.102L9.191 12.9c-.433.34-.838.643-1.191.905-1.04-.773-2.537-1.907-3.846-3.242C2.611 8.99 1.502 7.306 1.502 5.75a3.114 3.114 0 01.913-2.335c1.159-1.158 3.23-1.224 4.48-.191zm7.112 4.442c.313-.65.491-1.293.491-1.916v-.001c0-.614-.088-1.045-.23-1.385-.143-.339-.357-.633-.673-.949a3.113 3.113 0 00-2.218-.915c-1.092.003-2.165.627-3.226 1.602-.823.755-1.554 1.637-2.228 2.45l-.127.154.562.566a.756.756 0 001.066.02l.794-.79c1.258-1.258 3.312-1.31 4.594-.032.396.394.792.791 1.173 1.173l.022.023z"
                  ></path>
                </svg>
                <span class="group-hover:text-blue-400">Code of conduct</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center space-x-3 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="group-hover:text-blue-400 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <span class="group-hover:text-blue-400">Star</span>
              </a>
            </li>
          </ul>
        </div>
        <!--Sidebar-about Container ends-->
        <div class="border-t border-gray-800 flex flex-col space-y-5 py-5">
          <h3
            class="text-base font-semibold text-white flex items-center hover:text-blue-400"
          >
            Releases
            <span class="rounded-full px-2 bg-gray-700 ml-2">203</span>
          </h3>
          <div
            class="group flex items-center space-x-2 text-base max-w-[60%] flex-wrap"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="text-green-500 group-hover:text-blue-400 fill-current"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
              ></path>
            </svg>
            <strong class="group-hover:text-blue-400">v3.2.1</strong>
            <span
              class="rounded-full text-green-500 border border-green-500 px-2 text-xs"
            >
              Latest
            </span>
            <span class="text-xs group-hover:text-blue-400">14 days ago</span>
          </div>
          <a href="#" class="text-blue-400 hover:underline font-semibold"
            >+ 202 releases</a
          >
        </div>
        <!--Sidebar-releases Container ends-->
        <div class="border-t border-gray-800 flex flex-col space-y-5 py-5">
          <h3
            class="text-base font-semibold text-white flex items-center hover:text-blue-400"
          >
            Packages
          </h3>
          <span class="text-xs">No packages published yet</span>
        </div>
        <!--Sidebar-Packages Container ends-->
        <div class="border-t border-gray-800 flex flex-col space-y-5 py-5">
          <h3
            class="text-base font-semibold text-white flex items-center hover:text-blue-400"
          >
            Used by
            <span class="rounded-full px-2 bg-gray-700 ml-2">2.3m</span>
          </h3>
          <div class="flex group items-center">
            <img
              class="rounded-full"
              src="https://avatars.githubusercontent.com/u/91009280?s=64&amp;v=4"
              width="32"
              height="32"
              alt="@wojszmit"
            />
            <img
              class="rounded-full -ml-2"
              src="https://avatars.githubusercontent.com/u/82011520?s=40&v=4"
              width="32"
              height="32"
              alt="@wojszmit"
            />
            <img
              class="rounded-full -ml-2"
              src="https://avatars.githubusercontent.com/u/82011520?s=40&v=4"
              width="32"
              height="32"
              alt="@wojszmit"
            />
            <img
              class="rounded-full -ml-2"
              src="https://avatars.githubusercontent.com/u/82011520?s=40&v=4"
              width="32"
              height="32"
              alt="@wojszmit"
            />
            <img
              class="rounded-full -ml-2"
              src="https://avatars.githubusercontent.com/u/82011520?s=40&v=4"
              width="32"
              height="32"
              alt="@wojszmit"
            />
            <a
              href="#"
              class="text-blue-400 group-hover:underline font-semibold ml-2"
              >+ 202 releases</a
            >
          </div>
        </div>
        <!--Sidebar-used by Container ends-->
        <div class="border-t border-gray-800 flex flex-col space-y-5 py-5">
          <h3
            class="text-base font-semibold text-white flex items-center hover:text-blue-400"
          >
            Contributers
            <span class="rounded-full px-2 bg-gray-700 ml-2">235</span>
          </h3>
          <div class="flex group flex-col space-y-2">
            <div class="flex flex-wrap space-x-1">
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/91009280?s=64&amp;v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/822520?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/829820?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/87920?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/822420?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/520?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/81520?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/8201520?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/82520?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/019?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/8?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/820?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/82011?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/82011526?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/82011?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
              <img
                class="rounded-full mt-2"
                src="https://avatars.githubusercontent.com/u/820115?s=40&v=4"
                width="32"
                height="32"
                alt="@wojszmit"
              />
            </div>
            <a href="#" class="text-blue-400 hover:underline font-semibold ml-2"
              >+ 202 contributors</a
            >
          </div>
        </div>
        <!--Sidebar-contributers by Container ends-->
        <div class="border-t border-gray-800 flex flex-col space-y-5 py-5">
          <h3
            class="text-base font-semibold text-white flex items-center hover:text-blue-400"
          >
            Languages
          </h3>
          <div class="flex">
            <div
              class="w-11/12 h-2 rounded-md rounded-r-none bg-purple-700"
            ></div>
            <div
              class="w-1/12 h-2 rounded-md rounded-l-none bg-yellow-400"
            ></div>
          </div>
          <div>
            <ul class="flex flex-wrap">
              <li class="flex items-center space-x-2 mt-2 group">
                <span class="rounded-full w-3 h-3 bg-purple-700"></span>
                <span class="text-white group-hover:text-blue-400"
                  >JavaScript
                </span>
                <span class="text-xs group-hover:text-blue-400">92.2%</span>
              </li>
              <li class="flex items-center space-x-2 ml-4 mt-2 group">
                <span class="rounded-full w-3 h-3 bg-yellow-400"></span>
                <span class="text-white group-hover:text-blue-400">css</span>
                <span class="text-xs group-hover:text-blue-400">8.82%</span>
              </li>
            </ul>
          </div>
        </div>
        <!--Sidebar-languages Container ends-->
      </div>
      <!--Sidebar Container ends-->
    </div>
    <footer
      class="container w-full mx-auto flex flex-col flex-wrap space-y-5 lg:space-y-0 lg:flex-row space-x-12 items-center py-7 border-t border-gray-800"
    >
      <div class="flex space-x-4">
        <svg
          class="fill-current w-4"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <span class="text-xs">© 2022 GitHub, Inc</span>
      </div>
      <div class="flex space-x-6 mr-5 flex-wrap items-center">
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Terms</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Privacy
        </a>
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Security</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Status</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold">Docs</a>
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Contact</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Github</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Pricing</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold">API</a>
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >Training</a
        >
        <a href="#" class="text-blue-400 hover:underline font-semibold">Blog</a>
        <a href="#" class="text-blue-400 hover:underline font-semibold"
          >About</a
        >
      </div>
    </footer>
    <!--Footer ends-->
    <!--File Explorer Container ends-->
  </div>
</template>

<script>
import Readme from "./readme-tailwind.md";

export default {
  components: { Readme },
};
</script>

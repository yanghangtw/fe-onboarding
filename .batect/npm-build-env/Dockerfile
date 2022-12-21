FROM ubuntu:22.04

ARG NODE_VERSION=18.12.1
ENV NVM_DIR=/usr/local/nvm

RUN apt-get update && apt-get install -y \
    curl python3-pip git \
    # Required for playwright, copy paste from npx playwright install-deps --dry-run
    libasound2 libatk-bridge2.0-0 libatk1.0-0 libatspi2.0-0 libcairo2 libcups2 \
    libdbus-1-3 libdrm2 libgbm1 libglib2.0-0 libnspr4 libnss3 libpango-1.0-0 libwayland-client0 \
    libx11-6 libxcb1 libxcomposite1 libxdamage1 libxext6 libxfixes3 libxkbcommon0 libxrandr2 xvfb \
    fonts-noto-color-emoji fonts-unifont libfontconfig1 libfreetype6 xfonts-cyrillic xfonts-scalable \
    fonts-liberation fonts-ipafont-gothic fonts-wqy-zenhei fonts-tlwg-loma-otf fonts-freefont-ttf ffmpeg \
    libcairo-gobject2 libdbus-glib-1-2 libgdk-pixbuf-2.0-0 libgtk-3-0 libpangocairo-1.0-0 libx11-xcb1 \
    libxcb-shm0 libxcursor1 libxi6 libxrender1 libxtst6 libenchant-2-2 gstreamer1.0-libav \
    gstreamer1.0-plugins-bad gstreamer1.0-plugins-base gstreamer1.0-plugins-good libicu70 libegl1 \
    libepoxy0 libevdev2 libffi7 libgles2 libglx0 libgstreamer-gl1.0-0 libgstreamer-plugins-base1.0-0 \
    libgstreamer1.0-0 libgudev-1.0-0 libharfbuzz-icu0 libharfbuzz0b libhyphen0 libjpeg-turbo8 liblcms2-2 \
    libmanette-0.2-0 libnotify4 libopengl0 libopenjp2-7 libopus0 libpng16-16 libproxy1v5 libsecret-1-0 \
    libsoup2.4-1 libwayland-egl1 libwayland-server0 libwebpdemux2 libwoff1 libxml2 libxslt1.1 libx264-163 \
    libatomic1 libevent-2.1-7 \
    && rm -rf /var/lib/apt/lists/*

RUN pip install pre-commit

RUN mkdir -p $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

ENV NODE_PATH=$NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

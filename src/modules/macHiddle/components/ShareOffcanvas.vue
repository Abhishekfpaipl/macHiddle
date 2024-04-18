<template>
    <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="shareModalLabel">Share With</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row g-2">
                            <div class="col-6" v-for="(icon, index) in shareIcons" :key="index">
                                <div class="d-flex flex-column align-items-center p-2">
                                    <i class="fs-1 text-primary border p-3 px-4" :class="icon.icon"
                                        @click="shareContent(icon)"></i>
                                    <span span> {{ icon.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShareOffcanvas',
    data() {
        return {
            shareIcons: [
                { icon: 'bi bi-whatsapp', name: 'WhatsApp', url: 'https://wa.me/' },
                { icon: 'bi bi-instagram', name: 'Instagram', url: 'https://www.instagram.com/' },
                { icon: 'bi bi-facebook', name: 'Facebook', url: 'https://www.facebook.com/' },
                { icon: 'bi bi-copy', name: 'Copy', url: null }
            ]
        }
    },
    methods: {
        shareContent(platform) {
            let shareUrl;
            if (platform.name === 'Copy') {
                const shareUrl = `https://app.macHiddle.com${this.$route.path}`;
                // Copy the link to clipboard
                navigator.clipboard.writeText(shareUrl);
            } else {
                const url = `https://app.macHiddle.com${this.$route.path}`;
                shareUrl = platform.url + '?url=' + encodeURIComponent(url);
            }
            // console.log(shareUrl)
            window.open(shareUrl);
        },
    }
}
</script>

<style lang="scss" scoped></style>
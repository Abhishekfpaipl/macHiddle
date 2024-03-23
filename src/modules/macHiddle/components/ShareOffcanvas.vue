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
                                <div class="d-flex flex-column align-items-center border p-2">
                                    <i class="bi fs-1 text-primary" :class="icon.icon"></i>
                                    <span>{{ icon.name }}</span>
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
                { id: 1, icon: 'bi-whatsapp', name: 'WhatsApp', },
                { id: 2, icon: 'bi-instagram', name: 'Instagram' },
                { id: 3, icon: 'bi-facebook', name: 'Facebook' },
                { id: 3, icon: 'bi-copy', name: 'Copy Link' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
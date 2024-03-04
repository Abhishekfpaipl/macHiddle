<template>
    <div>
        <div class="w-100">
            <TopNav></TopNav>
            <div class="text-center fw-bold py-5"
                style="background-color: var(--primary-color); color: var(--secondary-color);">
                <p class="fs-1 mb-0">Career</p>
                <p class="fs-5">LOOKING FOR A CAREER, JOIN US !</p>
            </div>
            <div class="d-md-flex align-items-start d-bolck gap-3 container my-5">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div v-for="(data, index) in works" :key="index" class="col-12">
                            <div class="d-flex border p-2 py-3 mb-3" style="height: 110px;">
                                <div class="border p-3 me-3">
                                    <i :class="data.icon"></i>
                                </div>
                                <div class="ms-2">
                                    <span class="fw-bold">{{ data.heading }}</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 bg-light border pb-3">
                    <form class="p-3 pb-0 py">
                        <div class="d-md-flex d-block justify-content-between">
                            <div class="mb-3 w-100 px-1">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3 w-100 px-1">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Position</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-3 mt-2">Apply For Job</button>
                    </form>

                </div>
            </div>

            <div class=" bg-dark text-white py-5" style="opacity: 60%;">
                <h3 class="text-center ">Our Core Values</h3>
                <p class="text-center container">
                    One thing that we've tried to keep consistent through all these years is our core set of values and
                    beliefs.
                    They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                    values
                    in
                    everything we do - from the littlest of things to the biggest of decisions.
                </p>
            </div>
            <div class="container my-5">
                <div class="p-2 row">
                    <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                        <div class="d-flex align-items-center border p-2">
                            <img :src="data.icon" style="width: 8%; filter: grayscale(1);" class="mx-3">
                            <div class=" ms-2">
                                <span class="fw-bold">{{ data.heading }}</span>
                                <p>{{ data.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="w-100 position-relative bottom-0">
                <FooterPage></FooterPage>
            </div> -->
        </div>

    </div>
</template>

<script> 
export default { 
    name: 'CareerPage',
    data() {
        return {
            datas: [
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/think different.svg',
                    heading: 'Think Different',
                    text: 'Random ideas, new suggestions, and challenging the norm are always welcome.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/ownership of work.svg',
                    heading: 'Stay Weird, Be Yourself',
                    text: 'The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/respect everyone.svg',
                    heading: 'Respect Everyone',
                    text: 'Treat others how you’d like to be treated, and you have a happy family.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/Growth and learning.svg',
                    heading: 'Ownership Of Work',
                    text: 'Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/stay weird.svg',
                    heading: 'Take Initiative',
                    text: 'Want to change something? Change it. See something that needs fixing? Fix it.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/take initiative.svg',
                    heading: 'Growth & Learning',
                    text: 'Work with various teams and departments and learn something new every day.'
                },
            ],
            works: [
                {
                    icon: 'bi bi-currency-rupee fs-3',
                    heading: 'Competitive Salary'
                },
                {
                    icon: 'bi bi-bounding-box fs-3',
                    heading: 'Open Office Culture'
                },
                {
                    icon: 'bi bi-graph-up-arrow fs-3',
                    heading: 'Fast Growing Startup'
                },
                {
                    icon: 'bi bi-diagram-2 fs-3',
                    heading: 'Equal Opportunities'
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>
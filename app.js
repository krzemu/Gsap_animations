const animation1 = () => {
    const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1, delay: 1, defaults: { duration: .4, ease: "power1.in", delay: .2 } });
    tl.fromTo('#box', { scale: 1 }, { scale: 2 });
    tl.fromTo('#box', { borderRadius: 0, rotate: 0, backgroundColor: '#e2e8f0' }, { borderRadius: '100%', rotate: 180, backgroundColor: '#9900ff' });
    tl.to('#box', { scale: 1 });
    tl.to('#box', { rotate: 0, borderRadius: "0", backgroundColor: '#e2e8f0' });
    tl.play();
    return tl;
}


const animation2 = () => {
    const tl = gsap.timeline({
        paused: true,


        delay: 1,
        defaults: {
            scrollTrigger: {
                trigger: "#board",
                start: 'bottom 70%',
                end: "+=10%",
                scrub: 1,
            },
            duration: .4,
            ease: "back.out(1)",

        }
    });

    tl.fromTo('#board', { opacity: 0, scale: 0, y: 20 }, { opacity: 1, scale: 1, y: 0 });
    tl.fromTo('#board div', { opacity: 0, y: 60 }, { opacity: 1, y: 0, stagger: .2 }, "-=.1");

    tl.play();
    return tl;
}


const animation3 = () => {
    const bars = document.querySelectorAll('.bar');
    const splitHeader = new SplitText(document.querySelector('.heading-acc'));
    let barVolumes = [80, 20, 120];



    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.barWrapper',
            start: 'top top',
            end: '+=100%',
            toggleActions: 'play reverse play reverse',
            pin: true,
            scrub: 1,
            snap: 1,
            markers: true,
        },
        delay: 0,
        defaults: {
            duration: .3
        }
    });


    tl.fromTo('.bar__divider', { width: 0, }, { width: "80%" });

    bars.forEach((item, i) => {
        tl.fromTo(item.querySelector('.title'), { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, '-=.15');
        tl.fromTo(item, { height: 0 }, { height: barVolumes[i] }, '-=.15');
    });

    tl.fromTo(splitHeader.chars, { opacity: 0 }, { opacity: 1, stagger: .02 })

    return tl;
}


const animation4 = () => {
    const loadingBar = document.querySelector('.loaderBar');
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(loadingBar, { width: 0 }, { width: "100%" });
    let hideTl = gsap.timeline({ paused: true });
    hideTl.fromTo(loadingBar, { height: 32 }, { height: 0 });

    scroll.on('scroll', (args) => {
        if (typeof args.currentElements['longContent'] === 'object') {
            hideTl.reverse();
            let progress = args.currentElements['longContent'].progress;
            tl.progress(progress);
        }
        else {
            hideTl.play();
        }
    });


}


const animation5 = () => {
    const textBlocks = document.querySelectorAll('.text-content-block');
    const longContent = document.querySelector('.longContent');

    let tlArr = [];

    textBlocks.forEach((item, i) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 70%',
                end: 'bottom+=50% top',
                toggleActions: 'play reverse play reverse',
                // markers: true,
            },
            defaults: {
                ease: "power4.in",
                duration: .3
            }
        });
        const splitHeading = new SplitText(item.querySelector('h3'));
        tl.fromTo(
            splitHeading.chars,
            { opacity: 0 },
            { opacity: 1, stagger: .02 }
        );
        tl.fromTo(
            item.querySelector('p'),
            { opacity: 0, y: 0 },
            { opacity: 1, y: 0, duration: .4 },
            "<"
        );
        tlArr.push(tl);
    });
    return tlArr;
}

const animation6 = () => {
    const headingWrapper = document.getElementById('fancy-heading-anim');

    const splitHeader = new SplitText(headingWrapper.querySelector('h2'));
    const splitParagraph = new SplitText(headingWrapper.querySelector('p'), { type: 'words' });

    const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: '.stop-scroll-section',
            start: 'top top',
            end: 'bottom top',
            // markers: true,
            scrub: 1,
            // scroller: '.stop-scroll-section',
            // pinnedContainer: '.stop-scroll-section',
            pin: true,
            snap: 1,
        },
        defaults: {
            duration: 1.5,

        }
    });

    tl.fromTo(splitHeader.chars,
        { opacity: 0 },
        { opacity: 1, stagger: .05, }
    );

    tl.fromTo(splitParagraph.element.querySelectorAll('span'),
        { opacity: 0 },
        { opacity: 1, y: 0, stagger: .1 },
        "-=3"
    );
}

const animation7 = () => {
    let sections = gsap.utils.toArray(".panel");



    const horizontalTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.horizontalWrapper',
            pin: true,
            scrub: 1,
            end: "+=5000",
            // markers: true
        }
    });


    gsap.fromTo('.panel.first h3',
        { opacity: 0, y: 100 },
        {
            opacity: 1, y: 0, ease: 'power4.in',
            scrollTrigger: {
                trigger: '.panel.first h3',
                toggleActions: "play reset play reset",
                containerAnimation: horizontalTween,
                // markers: true,
            }
        }
    );
    gsap.fromTo('.panel.second h3',
        { opacity: 0, y: 100 },
        {
            opacity: 1, y: 0, ease: 'power4.in',
            scrollTrigger: {
                trigger: '.panel.second h3',
                containerAnimation: horizontalTween,
                start: "left center",
                toggleActions: "play reset play reset",
                id: "1",
            }
        }
    );
    gsap.fromTo('.panel.third h3',
        { opacity: 0, y: 100 },
        {
            opacity: 1, y: 0, ease: 'power4.in',
            scrollTrigger: {
                trigger: '.panel.third h3',
                containerAnimation: horizontalTween,
                start: "center 80%",
                end: "center 20%",
                toggleActions: "play reset play reset",

                // markers: true,
            }
        }
    );
}



// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//     width: window.innerWidth,
//     // mousewheel: {
//     //     invert: false,
//     // },
// });
// console.log(swiper);
// setTimeout(() => {
//     swiper.mousewheel.enable();
//     // console.log('yol');
// }, 3500);



// Exe

const f1 = animation1();
const f2 = animation2();
const f3 = animation3();
const f4 = animation4();
const f5 = animation5();
const f6 = animation6();
const f7 = animation7();


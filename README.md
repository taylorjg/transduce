# Description

When doing this:

```
const ys = R.compose(fc, fb, fa)(xs)
```

the functions will be invoked in the order `fa`, `fb`, `fc`.

So I was confused by the order in which the functions were invoked when doing this:

```
const ys = R.into([], R.compose(fc, fb, fa), xs)
```

They seemed to be invoked in the opposite order i.e. `fc`, `fb`, `fa`.

So, I created this repo to kick the idea around a bit.

# Links

* [Ramda transduce](https://ramdajs.com/docs/#transduce)
* [Yes, this is the expected behavior](https://github.com/ramda/ramda/issues/2123#issuecomment-358518506)
* [Why transducers compose backwards](http://gmorpheme.net/why-transducers-compose-backwards.html)
* [Transducer Composition](http://isaaccambron.com/blog/2014/12/13/transducer-composition.html)

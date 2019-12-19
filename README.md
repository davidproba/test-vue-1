# test-vue-1

Test Vue 1
Reproduction:

    "yo liferay-js"
    "npm install vuetfiy"

So far, everything seems fine, dependencies are set to package.json as expected. vuetify.js does basically just export a Vuetify object.
index.js contains trivial hello world markup using vuetify tags.

After build, deploy and placing widget to a page on DXP 7.2 SP1, output is empty. Console shows:

liferay-amd-loader | A require() call has failed but no failure handler was provided. Note that even if the call stack of this error trace looks like coming from the Liferay AMD Loader, it is not an error in the Loader what has caused it, but an error caused by the require() call. The reason why the Loader is in the stack trace is because it is printing the error so that it doesn't get lost. However, we recommend providing a failure handler in all require() calls to be able to recover from errors better and to avoid the appearance of this message..... (and so on)


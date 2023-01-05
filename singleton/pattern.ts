class Singleton {
    private static _instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {}

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */

    public static getInstance(){
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    /**
     * Project continues with rest of it's needs.
     *                  .
     *                  .
     *                  .
     *                  .
     */

}

export default Singleton;
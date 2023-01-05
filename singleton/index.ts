import Singleton from "./pattern";

function testSingletonPattern(): string {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
        return "Singleton works, both variables contain the same instance.";
    }
    return "Singleton failed, variables contain different instances.";
}

const result = testSingletonPattern();
console.log(result);
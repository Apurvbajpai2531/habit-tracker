import subprocess


def run(cmd):
    print(f"Running: {cmd}")
    subprocess.call(cmd, shell=True)


def cleanup():
    print("\n=== CLEANING SYSTEM ===")

    # stop all containers
    run("docker stop $(docker ps -aq) || true")

    # remove all containers
    run("docker rm -f $(docker ps -aq) || true")

    # remove orphan networks
    run("docker network prune -f || true")

    # free ports (important fix for your errors)
    run("fuser -k 5000/tcp || true")
    run("fuser -k 8501/tcp || true")
    run("fuser -k 5432/tcp || true")


def build_and_run():
    print("\n=== BUILD + START ===")

    run("docker compose down -v --remove-orphans || true")
    run("docker compose up --build")


def main():
    print("STARTING FULL DOCKER FIX PIPELINE")

    cleanup()
    build_and_run()

    print("\nDONE: SYSTEM RUNNING")


if __name__ == "__main__":
    main()

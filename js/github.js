class Github {
    constructor() {
        this.clinet_id = '7176b3e6b4554e1b258f';
        this.client_secret = '2f3fe6fa51158d61540c42ef1996cbdae29067b5';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clinet_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clinet_id}&clinet_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile, repos
        }
    }
}
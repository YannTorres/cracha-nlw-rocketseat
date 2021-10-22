const LinksSocialMedias = {
  github: 'YannTorres',
  youtube: 'channel/UC2vbQ5pifm-_TP3sGNFoL5A',
  instagram: 'yann.torress',
  facebook: 'FlavinDoPneuuu',
  twitter: 'yann_torress'
}

function ChangeSocialMediasLinks() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedias[social]}`
  }
}

ChangeSocialMediasLinks()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      GitHubLink.href = `https://github.com/${data.login}`
      ProfilePicture.src = data.avatar_url
      GitHubUserName.textContent = data.login
    })
}

GetGitHubProfileInfos()

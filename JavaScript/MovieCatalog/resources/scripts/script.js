function recommend(genre) {
    let age = +document.getElementById("age").value
    let recommendation = document.getElementById("recommendation")

    switch (genre) {
        case "drama":
            if (age >= 18) {
                recommendation.textContent = "You should watch 'Shindler's List'"
            } else {
                recommendation.textContent = "You should watch 'The Lion King'"
            }
            break
        case "comedy":
            if (age >= 18) {
                recommendation.textContent = "You should watch 'Superbad'"
            } else {
                recommendation.textContent = "You should watch 'The Lego Movie'"
            }
            break
        case "musical":
            if (age >= 18) {
                recommendation.textContent = "You should watch 'The Sound of Music'"
            } else {
                recommendation.textContent = "You should watch 'Frozen'"
            }
            break
        case "horror":
            if (age >= 18) {
                recommendation.textContent = "You should watch 'The Exorcist'"
            }
            else {
                recommendation.textContent = "You should watch 'Coraline'"
            }
            break
    }
}
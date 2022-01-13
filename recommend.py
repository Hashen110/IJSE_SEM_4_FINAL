import pandas as pd

# Load the datasets
df2 = pd.read_csv('datasets/movies_metadata.csv', low_memory=False)

df2.drop(['adult', 'belongs_to_collection', 'budget', 'homepage', 'imdb_id', 'original_language', 'original_title',
          'popularity', 'production_companies', 'production_countries', 'revenue', 'runtime', 'spoken_languages',
          'status', 'tagline', 'video', 'genres'], axis=1, inplace=True)

C = df2['vote_average'].mean()

m = df2['vote_count'].quantile(0.9)

q_movies = df2.copy().loc[df2['vote_count'] >= m]


def weighted_rating(x, m=m, C=C):
    v = x['vote_count']
    R = x['vote_average']
    # Calculation based on the IMDB formula
    return (v / (v + m) * R) + (m / (m + v) * C)


# Define a new feature 'score' and calculate its value with `weighted_rating()`
q_movies['score'] = q_movies.apply(weighted_rating, axis=1)

# Sort movies based on score calculated above
q_movies = q_movies.sort_values('score', ascending=False)

# Movies as json
q_movies_json = []
for index, row in list(df2.iterrows()):
    q_movies_json.append(dict(row))

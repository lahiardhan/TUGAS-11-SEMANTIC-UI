import "semantic-ui-css/semantic.min.css";
import {
	List,
	Loader,
	Dimmer,
	Placeholder,
	Segment,
	Image,
	Divider,
	Search,
	Icon,
	Button,
	Header,
	Grid,
} from "semantic-ui-react";

function App() {
	return (
		<div>
			<br />
			<Segment textAlign="center" placeholder>
				<Grid columns={2}>
					<Divider vertical>OR</Divider>
					<Grid.Column>
						<Header icon>
							<Icon name="search" />
							Cari documnet
						</Header>
						<Search placeholder="Search document..."></Search>
					</Grid.Column>

					<Grid.Column>
						<Header icon>
							<Icon name="pdf file outline" />
							Tambah Document Baru
						</Header>
						<Button color="primary">Create Document</Button>
					</Grid.Column>
				</Grid>
			</Segment>

			<Segment>
				<Dimmer active>
					<Loader />
				</Dimmer>

				<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
			</Segment>

			<Grid columns={3}>
				<Grid.Column>
					<Segment>
						<Placeholder>
							<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Header>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Segment>
				</Grid.Column>

				<Grid.Column width={7}>
					<Segment>
						<Placeholder>
							<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Header>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</Segment>
				</Grid.Column>

				<Grid.Column width={3}>
					<List>
						<List.Item>
							<Header as="h4">Website Terkait</Header>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noreferrer"
								>
									Google
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.semantic-ui.com"
									target="_blank"
									rel="noreferrer"
								>
									Semantic UI
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.niomic.com"
									target="_blank"
									rel="noreferrer"
								>
									Niomic
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https:/reactjs.org"
									target="_blank"
									rel="noreferrer"
								>
									React
								</a>
							</List.Content>
						</List.Item>
					</List>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default App;

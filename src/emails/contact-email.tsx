import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  message: string;
}

export default function ContactEmail({ name, message }: ContactEmailProps) {
  return (
    <Html>
      <Preview>New inquiry from {name}</Preview>
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "0 auto", padding: "20px 0 48px", width: "580px" }}>
          <Heading style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
            New Contact Message
          </Heading>
          <Text style={{ fontSize: "16px", color: "#333" }}>
            <strong>From:</strong> {name}
          </Text>
          <Hr />
          <Text style={{ fontSize: "16px", color: "#333" }}>
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}